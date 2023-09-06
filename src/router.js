module.exports = (app) => {

    app.get('/', function(request, response) {
        response.send(
            `
            <html>
                <body>
                    Ultima School
                </body>
            </html>
            `
        );
    });

    app.get('/alunos', function (request, response){
        response.send(
            `
            <!DOCTYPE html>
            <html lang="pt-br">
            <head> 
                <meta charset = "UTF-8">
                <meta http-equiv = "X-UA-Compatible" content = "IE-edge">
                <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
                <title>Ultima School</title>
                <body> 
                    <h1>Listagem de alunos</h1>

                    <table> 
                        <thead>
                            <tr> 
                                <td>#</td>
                                <td>Matrícula</td>
                                <td>Nome do Aluno</td>
                            </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>00000000</td>
                                <td>Kelvin</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>00000001</td>
                            <td>Mateus</td>
                        </tr>
                        </tbody>
                    </table>
                </body>
                </html>
            `
        );
    });

}