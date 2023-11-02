export const FormReview = () => {

	const {
		register,
		handleSubmit,
		reset,
	} = useForm();

	const submit = (formData) => {
		createUser(formData, reset);
	};

	return (
		<form onSubmit={handleSubmit(submit)}>
			

			<button className="btn menu-item" type="submit">
				Avaliar
			</button>
		</form>
	);
};
