# TeamLaika

Trabajo practico de la materia Programacion Web realizado por Jeffrey Dietz, Federico Rodriguez, Franco Masuelli y Karen Leal.


# Funcionalidad

La pagina permite visualizar  tortas y recetas de pasteleria. Cuenta con un sistema de Usuarios el cual permite registrar un usuario y al estar autenticado podemos
entrar a nuestro perfil y cargar, editar y eliminar nuestras propias recetas.

# Instalacion

Lo primero que debemos realizar es clonar el repositorio en nuestra pc, esto puede realizarse mediante la aplicacion github desktop o escribiendo el siguiente 
comando en la terminal de nuestra IDE:

```
git clone https://github.com/jeffreydtz/TeamLaika.git
```

Luego procedemos a instalar las dependencias del frontend mediante los siguientes comandos (EN WEBSTORM):

```
cd pw-tk
```
```
npm install
```
Luego abriremos el proyecto en PYCHARM y configuraremos el backend con los siguientes comandos:

```
cd backend
```

```
pipenv shell
```
```
pipenv install
```

Finalmente, para visualizar la pagina usaremos los comandos

EN PYCHARM:
```
py manage.py runserver
```
EN WEBSTORM:
```
npm start
```

