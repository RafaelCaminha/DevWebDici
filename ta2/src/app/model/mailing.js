import Sequelize, { Model } from "sequelize"

class Mailing extends Model{
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                email: Sequelize.STRING,
            },
            {
                sequelize,
            }
        )
    }
}

export default Mailing