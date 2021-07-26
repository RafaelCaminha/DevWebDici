import Sequelize from "sequelize"
import config from "../config/database"
import Mailing from "../app/model/mailing"

const models = [Mailing]

class Database{
    constructor(){
        this.connection = new Sequelize(config)
        this.init()
    }

    init(){
        models.forEach(models => models.init(this.connection))
    }
}

export default new Database()