import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { userContext } from "./userContext";

export const ReviewContext = createContext({});

export const ReviewProvider = ({ children }) => {
	const { user } = useContext(userContext);

	const [movies, setMovies] = useState([]);
	const [reviews, setReviews] = useState([]);

	const [selectedMovie, setSelectedMovie] = useState(null)
	const [editingReview, setEditingReview] = useState(null);

	const token = localStorage.getItem("@TOKEN");

	if (selectedMovie) {
		if (user) {
			localStorage.setItem("@selectedMovie", JSON.stringify(selectedMovie))
		}
	}

	useEffect(() => {
		const getMoviesAndReviews = async () => {
			try {
				const { data } = await api.get("/movies?_embed=reviews");
				const newReviews = data
					.filter((movie) => movie.reviews.length > 0)
					.map((movie) => movie.reviews);
				setMovies(data);
			} catch (error) {
				const message = error.response.data.message;
				toast.error(message);
			}
		};
		getMoviesAndReviews();
	}, []);

	const createReview = async (reviewData) => {
		try {
			const { data } = await api.post("/reviews", reviewData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setReviews([...reviews, data]);
			console.log(reviews)
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
					return review;
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

	const calculateReviewScore = (Id) => {
		const newReviews = movies.filter((movie) => movie.id === Id).map(review => review.reviews);

		const sumReviews = newReviews[0].reduce((prev, review) => {
			return prev + review.score;
		}, 0);

		return sumReviews / newReviews.length;
	};

	return (
		<ReviewContext.Provider
			value={{
				createReview,
				editReview,
				editingReview,
				setEditingReview,
				deleteReview,
				movies,
				reviews,
				calculateReviewScore,
				selectedMovie,
				setSelectedMovie,
			}}
		>
			{children}
		</ReviewContext.Provider>
	);
};

export const useReviewContext = () => useContext(ReviewContext);
