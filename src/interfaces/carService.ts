import type { Car, Cars } from './car';

export interface ICarService {
	getCars(): Promise<Cars>;
	getCarById(id: Car['id']): Promise<Car | null>;
	createCar(data: Car): Promise<Car | null>;
	updateCar(data: Car): Promise<Car | null>;
	deleteCar(id: Car['id']): Promise<void | string>;
}
