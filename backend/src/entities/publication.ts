import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export class Publication extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public userId: number;

  @Column()
  public title: string;
  
  @Column()
  public body: string;

  constructor (data: any = null) {
    super();
    if (data) {
      this.id = data.id;
      this.userId = data.userId;
      this.title = data.title;
      this.body = data.body;
    }
  }
}