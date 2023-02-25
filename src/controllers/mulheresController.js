const mongoose = require('mongoose')
const Mulher = require('../models/Mulher')

const getAll = async (req, res) => {
  const mulheres = await Mulher.find()
  res.json(mulheres)
}

const create =  async (req,res) => {

  const mulher = new Mulher({
    _id:  new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    imagem: req.body.imagem,
    citacao: req.body.citacao,
    bio: req.body.bio,
    criadoEm: req.body.criadoEm
  })
  
  const mulherJaExiste = await Mulher.findOne({nome: req.body.nome})

  if (mulherJaExiste) {
    return res.status(400).json({error: 'Mulher já cadastrada.'})
  }

  try { 
    const novaMulher = await mulher.save()
    res.status(201).json(novaMulher)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getOne = async (req, res) => {
  try {
    const mulher = await Mulher.findById(req.params.id)
    if(mulher == null) {
      return res.status(404).json({message: 'mulher não encontrada'})
    }
    res.json(mulher)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateOne = async (req, res) => {
  try {
    const mulher = await Mulher.findById(req.params.id)
    if(mulher == null) {
      return res.status(404).json({message: 'mulher não encontrada'})
    }
    
    if (req.body.nome != null) {
      mulher.nome = req.body.nome
    }

    if (req.body.imagem != null) {
      mulher.imagem = req.body.imagem
    }

    if (req.body.bio != null) {
      mulher.bio = req.body.bio
    }

    if (req.body.citacao != null) {
      mulher.citacao = req.body.citacao
    }

    if (req.body.cita != null) {
      mulher.criadoEm = req.body.criadoEm
    }
    
    const mulherAtualizada = await mulher.save()
    res.json(mulherAtualizada)

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteOne = async (req, res) => {
  try{    
    const mulher = await Mulher.findById(req.params.id)
    if(mulher == null) {
      return res.status(404).json({message: 'mulher não encontrada.'})
    }

    await mulher.remove()
    res.json({ message: 'mulher deletada com sucesso!'})
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAll,
  create,
  getOne,
  updateOne,
  deleteOne
}