import Mailing from "../model/mailing"

class controller{
    async index(req, res){
        try {
            const data = await Mailing.findAll({
                limit: 1000,
            })
            return res.json(data)
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    async show(req, res){
        try {
            const id = parseInt(req.params.id)
            const mailing = await Mailing.findByPk(id)
            const status = mailing ? 200:400

            return res.status(status).json(mailing)
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    async create(req, res){
        try {
            const {nome, email} = req.body
            const novoMailing = await Mailing.create({nome, email})

            return res.status(201).json(novoMailing)
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    async update(req, res){
        try {
            const id = parseInt(req.params.id)
            const {nome, email} = req.body

            const status = id >= 0 ? 200:400

            const mailing = await Mailing.findByPk(id)
            const novoMailing = await mailing.update({nome,email})

            return res.status(status).json(novoMailing)
        } catch (e) {
            console.log("Erro: ", e)
        }
    }

    async destroy(req, res){
        try {
            const id = parseInt(req.params.id)
            const mailing = await Mailing.findByPk(id)
            const status = id >= 0 ? 200:404

            mailing.destroy()
            return res.status(status).json()
        } catch (e) {
            console.log("Erro: ", e)
        }
    }
}

export default new controller()