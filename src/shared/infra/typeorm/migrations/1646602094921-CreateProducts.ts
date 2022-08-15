import { MigrationInterface, QueryRunner, Table} from 'typeorm'

export class CreateProducts1646602094921 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'products',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'brand',
						type: 'varchar'
					},
					{
						name: 'price',
						type: 'integer'
					},
					{
						name: 'expiration_date',
						type: 'timestamp'
					}
				]
			})
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('products')
	}
}
