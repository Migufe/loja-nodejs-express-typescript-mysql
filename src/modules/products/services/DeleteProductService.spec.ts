import { FakeProductsRepository } from '../repositories/fakes/FakeProductsRepository'
import { CreateProductsService } from './CreateProductService'
import { DeleteProductService } from './DeleteProductService'

let fakeProductsRepository: FakeProductsRepository
let createProductService: CreateProductsService
let deleteProductService: DeleteProductService

describe('Delete Product', () => {
	beforeEach(() => {
		fakeProductsRepository = new FakeProductsRepository()
		createProductService = new CreateProductsService(fakeProductsRepository)
		deleteProductService = new DeleteProductService(fakeProductsRepository)
	})

	it('Should be able to delete a product', async () => {
		const product = await createProductService.execute({
			name: 'Biscoito recheado',
			description: 'Sabor maracujá',
			price: 2
		})

		expect(fakeProductsRepository.products).toEqual([product])

		const product_id = product.id

		await deleteProductService.execute(product_id)

		expect(fakeProductsRepository.products).toEqual([])
	})
})
