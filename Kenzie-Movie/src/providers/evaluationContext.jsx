import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const EvaluationContext = createContext({});

export const EvaluationProvider = ({ children }) => {
	const [evaluations, setEvaluations] = useState(null);

	const [editingEvaluation, setEditingEvaluation] = useState(null);

	const token = localStorage.getItem("@TOKEN");

	// useEffect(() => {
	// 	const getMovieEvaluation = async () => {
	// 		try {
    //             const {data} = await api.get()
	// 		} catch (error) {
	// 			const message = error.response.data.message;
	// 			toast.error(message);
	// 		}
	// 	};
	// });

	const createEvaluation = async (evaluationData) => {
		try {
			const { data } = await api.post("/reviews", evaluationData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setEvaluations([...evaluations, data]);
			toast.success("Filme avaliado com sucesso!");
		} catch (error) {
			const message = error.response.data.message;
			toast.error(message);
		}
	};

	const editEvaluation = async (evaluationData) => {
		try {
			const { data } = await api.put(
				`/reviews/${editingEvaluation.id}`,
				evaluationData,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const newEvaluations = evaluations.map((evaluation) => {
				if (evaluation.id === editingEvaluation.id) {
					return data;
				} else {
					return tech;
				}
			});
			setEvaluations(newEvaluations);
			toast.success("Avaliação alterada com sucesso!");
		} catch (error) {
			const message = error.response.data.message;
			toast.error(message);
		}
	};

	const deleteEvaluation = async (evaluationId) => {
		try {
			await api.delete(`/reviews/${evaluationId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const newEvaluations = evaluations.filter(
				(evaluation) => evaluation.id !== evaluationId
			);
			setEvaluations(newEvaluations);
			toast.success("Avaliação excluída com sucesso.");
		} catch (error) {
			const message = error.response.data.message;
			toast.error(message);
		}
	};

	return (
		<EvaluationProvider.Provider
			value={{
				createEvaluation,
				editEvaluation,
				editingEvaluation,
				setEditingEvaluation,
				deleteEvaluation,
				evaluations,
			}}
		>
			{children}
		</EvaluationProvider.Provider>
	);
};

export const useEvaluationContext = () => useContext(EvaluationContext);
