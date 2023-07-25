/* eslint-disable no-console */
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Formik } from "formik";

import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
	title: "Design System/Cards/Resource Tab Card",
	component: TextField
};

export default meta;

type Story = StoryObj<typeof TextField>;

const TextInput = (args: Story) => {
	return <TextField name={args?.name ?? "name"} />;
};

const Template = () => {
	return (
		<Formik initialValues={{ name: "people" }} onSubmit={(values) => console.log(values)}>
			<TextInput />
		</Formik>
	);
};

export const Simple: Story = {
	render: Template,
	args: {}
};
