import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Paciente from 'App/Models/Paciente'
import Database from '@ioc:Adonis/Lucid/Database'

export default class PacientesController {

  public async index() {
    //const paciente = await Paciente.from('pacientes').select('*');
    const paciente = await Database.from('pacientes').paginate(1,3)
    //console.log(paciente)
    paciente.baseUrl('pacientes')

    paciente.namingStrategy = {
      paginationMetaKeys() {
        return {
          total: 'total',
          perPage: 'perPage',
          currentPage: 'currentPage',
          lastPage: 'lastPage',
          firstPage: 'firstPage',
          firstPageUrl: 'firstPageUrl',
          lastPageUrl: 'lastPageUrl',
          nextPageUrl: 'nextPageUrl',
          previousPageUrl: 'previousPageUrl',
        }
      }
    }
    console.log(paciente.toJSON())
    return paciente.toJSON();
  }
  public async store({request, response, params}: HttpContextContract) {
    const body = request.body();
    const paciente = await Paciente.create(body)


    response.status(201)

    return {
      msg: 'Paciente Adicionado com sucesso',
      data: paciente,
    }
  }

  public async destroy({request, response}: HttpContextContract) {
    const idPaciente = request.param('id')
    const paciente = await Paciente.findOrFail(idPaciente);
    await paciente.delete();

    return  {
      msg: "Pacientes Excluído com Sucesso!",
      data: paciente,
    }
  }
}
