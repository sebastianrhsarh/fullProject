import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public postId: number;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column('longtext')
  public body: string;

  constructor (data: any = null) {
    super();
    if (data) {
      this.id = data.id;
      this.postId = data.postId;
      this.name = data.name;
      this.email = data.email;
      this.body = data.body;
    }
  }
}