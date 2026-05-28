const express = require('express');
const MaestrosList = require('./Modelos/MaestrosList')
const PORT = 5000;
//endpoint
//metodo 
//request/response
//codigo respuesta 200,404,500, 401, 403..... 

const app = express();


app.use(express.json());


app.get('/maestros',async (req, res) => {

    try {
        const maestros = await MaestrosList.findAll();

        if(maestros.length > 0){

        return res.status(200).json({
            message: 'Lista de maestros Cargada',
            data: maestros,
        });
        }
        else{
            res.status(400).json({
                message: 'No se encontraron Docente',
            });
        }

        
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener lista de Docentes',
            error: error.message,
        });
    }


});


app.post('/maestros',async (req, res) => {
    try {

        const maestros = await MaestrosList.create(req.body);

        if(maestros){
            return res.status(200).json({
                message: 'Docente añadido con exito',
                data: maestros,
            });
        }
        else{
            res.status(400).json({
                message: 'Error al crear Docente',
                error: 'No se pudo añadir el docente',
            });
        }



    } catch (error) {
        res.status(500).json({
            message: 'Error al añadir el docente',
            error: error.message,
        });
    }
});


app.put('/maestros/:id',async (req, res) => {

    try {

        //update asignatura set nombre = ?, cantidadhoras = ?, estado = ? where idAsignatura = ?;

        const maestros = await MaestrosList.update(req.body, {
            where: {
                id_maestro: req.params.id,
            },
        });

        if(asignatura){
            return res.status(200).json({
                message: 'Docente actualizado correctamente',
                data: maestros,
            });
        }
        else{
            res.status(400).json({
                message: 'Error al actualizar Docente',
                error: 'No se pudo actualizar Docente',
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar Docente',
            error: error.message,
        });
    }


})

app.delete('/maestros/:id',async (req, res) => {
    try {

        //delete from asignatura where idAsignatura = ?;
        const maestros = await MaestrosList.destroy({
            where: {
                id_maestro: req.params.id,
            },
        });

        
        if(maestros){
            return res.status(200).json({
                message: 'Maestro eliminado correctamente',
                data: maestros,
            });
        }
        else{
            res.status(400).json({
                message: 'Error al eliminar Docente',
                error: 'No se pudo eliminar Docente',
            });
        }
    } catch (error) {
        
        res.status(500).json({
            message: 'Error al eliminar el Docente',
            error: error.message,
        });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});