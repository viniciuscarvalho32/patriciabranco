import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('/pacientes', 'PacientesController').apiOnly()
}).prefix('/api')

