import { useForm } from "react-hook-form";
import { useReviewContext } from "../../../providers/reviewContext";

export const EditFormReview = () => {

	const {createReview} = useReviewContext();

	const {
		register,
		handleSubmit,
		reset,
	} = useForm();

	const submit = (formData) => {
		createReview(formData, reset);
	};

	return (
		<form onSubmit={handleSubmit(submit)}>

			<select id="score" {...register("score")}>
				<option hidden>Selecione uma nota</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
				<option>5</option>
			</select>

			<textarea id="description" cols="30" rows="10" placeholder="Deixe um comentário" {...register("description")}></textarea>

			<button className="btn menu-item" type="submit">
				Avaliar
			</button>
		</form>
	);
};
