import * as React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useField } from "formik";

interface Props extends TextInputProps {
	name: string;
}

const TextField = ({ name, placeholder, ...props }: Props) => {
	const [field, , helpers] = useField<string>(name);

	return (
		<TextInput
			{...props}
			onChangeText={(value) => {
				helpers.setValue(value);
			}}
			value={field.value}
			placeholder={placeholder}
		/>
	);
};

export default TextField;
