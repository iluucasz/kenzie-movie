import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const ReviewContext = createContext({});

export const ReviewProvider = ({ children }) => {
	const [reviews, setReviews] = useState([]);

	const [editingReview, setEditingReview] = useState(null);

	const token = localStorage.getItem("@TOKEN");

	useEffect(() => {
		const getMoviesReviews = async () => {
			try {
                const {data} = await api.get("/movies?_embed=reviews")
				const newReviews = data.filter(movie => movie.reviews.length > 0).map(movie => movie.reviews)
				setReviews(newReviews)
			} catch (error) {
				const message = error.response.data.message;
				toast.error(message);
			}
		};
		getMoviesReviews()
	});

	const createReview = async (reviewData) => {
		try {
			const { data } = await api.post("/reviews", reviewData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setReviews([...reviews, data]);
			toast.success("Filme avaliado com sucesso!");
		} catch (error) {
			const message = error.response.data.message;
			toast.error(message);
		}
	};

	const editReview = async (reviewData) => {
		try {
			const { data } = await api.put(
				`/reviews/${editingReview.id}`,
				reviewData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const newReviews = reviews.map((review) => {
				if (review.id === editingReview.id) {
					return data;
				} else {
					return tech;
				}
			});
			setReviews(newReviews);
			toast.success("Avaliação alterada com sucesso!");
		} catch (error) {
			const message = error.response.data.message;
			toast.error(message);
		}
	};

	const deleteReview = async (reviewId) => {
		try {
			await api.delete(`/reviews/${reviewId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const newReviews = reviews.filter(
				(review) => review.id !== reviewId
			);
			setReviews(newReviews);
			toast.success("Avaliação excluída com sucesso.");
		} catch (error) {
			const message = error.response.data.message;
			toast.error(message);
		}
	};

	return (
		<ReviewContext.Provider
			value={{
				createReview,
				editReview,
				editingReview,
				setEditingReview,
				deleteReview,
				reviews,
			}}
		>
			{children}
		</ReviewContext.Provider>
	);
};

export const usereviewContext = () => useContext(ReviewContext);
