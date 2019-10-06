/**
 * Importação do Model do Usuário
 */
const User = require("../models/User");

/**
 * @method GET => Buscando informação
 * @param (req, res)
 * (req) => parametro de envio da requisição
 * (res) => resposta da requisição
 */

 /**
  * req.query => Acessar query params (FILTROS)
  * req.params => Acessar route params (PUT, DELETE)
  * req.body => Acessar corpo da requisição (POST, PUT)
  */

module.exports = {
  /**
   * @method index
   * Listagem de sessões
   */
  index(){},

  /**
   * @method show
   * Listar uma unica sessão 
   */
  show(){},

  /**
   * @method store
   * Criar uma sessão
   */
  async store(req,res) {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if(!user) {
      user = await User.create({ email , password});
    }
    return res.json(user);
  },

  /**
   * @method update
   * Alterar uma sessão
   */
  update(){},


  /**
   * @method destroy
   * Remover uma sessão
   */
  destroy(){},
  
};