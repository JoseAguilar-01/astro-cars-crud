export interface Props {
	id: string;
	name: string;
	placeholder: string;
	label: string;
	value?: string | number;
	containerClassName?: string;
	type?: 'text' | 'number';
}
