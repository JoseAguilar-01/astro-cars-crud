import type { Car, Cars } from '@interfaces/car';
import type { ICarService } from '@interfaces/carService';

class CarService implements ICarService {
	private apiUrl = 'http://localhost:3000/cars';

	async getCars() {
		try {
			const response = await fetch(this.apiUrl);
			const result: Cars = await response.json();

			return result;
		} catch (error) {
			console.log('🚀 ~ CarService ~ getCars ~ error:', error);

			return [];
		}
	}

	async getCarById(id: Car['id']) {
		try {
			const response = await fetch(`${this.apiUrl}/${id}`);
			const result: Car = await response.json();

			return result;
		} catch (error) {
			console.log('🚀 ~ CarService ~ getCarById ~ error:', error);

			return null;
		}
	}

	async createCar(data: Car) {
		try {
			const response = await fetch(this.apiUrl, {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result: Car = await response.json();

			return result;
		} catch (error) {
			console.log('🚀 ~ CarService ~ updateCar ~ error:', error);

			return null;
		}
	}

	async updateCar(data: Car) {
		try {
			const response = await fetch(`${this.apiUrl}/${data.id}`, {
				method: 'PATCH',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result: Car = await response.json();

			return result;
		} catch (error) {
			console.log('🚀 ~ CarService ~ updateCar ~ error:', error);

			return null;
		}
	}

	async deleteCar(id: Car['id']): Promise<void | string> {
		try {
			await fetch(`${this.apiUrl}/${id}`, {
				method: 'DELETE',
			});

			return 'Modelo eliminado exitosamente';
		} catch (error) {
			console.log('🚀 ~ CarService ~ deleteCar ~ error:', error);
		}
	}
}

export const carServiceInstance = new CarService();
