export type Cars = Car[];

export interface Car {
	id: string;
	brand: string;
	model: string;
	year: number;
	color: string;
	price: number;
	features: Features;
}

export interface Features {
	engine: string;
	transmission: Transmission;
	drivetrain: Drivetrain;
}

export enum Drivetrain {
	AllWheelDrive = 'All-wheel Drive',
	FrontWheelDrive = 'Front-wheel Drive',
	RearWheelDrive = 'Rear-wheel Drive',
}

export enum Transmission {
	Automatic = 'Automatic',
	Manual = 'Manual',
}
