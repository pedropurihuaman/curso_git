<!-- Lista de comandos de git -->
<!-- Clase -1  -->

1. Instalaciones

<!-- Clase - 2  -->

<!-- 1. Crear repositorio -->
<!-- Inicia el repositorio -->

    git init

<!-- 2. Agregar archivos y directiorios a repositorio -->
  <!-- 2.1 Agrega un archivo en especifico.  -->

    git add nombre.archivo

  <!-- 2.2 Agrega todo los archivo -->

    git add .

<!-- 3. Indica el estado de los archivos y directorios -->

    git status -s

<!-- 4. Respaldar archivos y directorios en repositorios -->

    git commit -m 'Mensaje o descripción del commit'

<!-- 5. Muestra el listado de las copias -->

    git log --oneline

<!-- 6. Restaura el archivo -->

    git reset --hard 'codigo(c40f5aa)'

<!-- Clase - 3  -->
<!-- 7. Agrega los archivos y realiza un replado (commit) -->

    git commit -am 'Mensaje o decripcion del commit'

<!-- 8. Abrir el editor vim -->

    git commit --amend

<!-- 9. Para cerrar el editor vim -->

    :wq

<!-- 10. Para subir los archivos a github -->

    git remote add origin https://github.com/pedropurihuaman/curso_git.git

<!-- 11. Para actualizar y subir las modificaciones -->

    git push -u origin main/master

<!-- Clase - 4  -->
<!-- 12. Para traer la información de remoto a local -->

    git pull

<!-- 13. Creando tags -->
  <!-- git tag 'nombre archivo' -m 'Descripcion' -->

    git tag 24-10-20v1 -m 'Versión 1 del proyecto'

<!-- 14. Subiendo tags -->

    git push --tags

<!-- 15. Clana un repositorio  -->

    git clone 'ruta del archivo remoto'

<!-- Clase - 5  -- RAMAS O BRANCH -->
<!-- 16. Crear rama -->

    git branch nombre_rama

<!-- 17. Muestra en que rama te encuentras -->

    git branch

<!-- 18. Te mueves entre ramas -->

    git checkout nombre_rama

<!-- Clase - 6  -->
<!-- Clase - 7  -->
<!-- Clase - 8  -->
<!-- Clase - 9  -->
<!-- Clase - 10  -->
<!-- Clase - 11  -->
<!-- Clase - 12  -->
<!-- Clase - 13  -->
<!-- Clase - 14  -->
<!-- Clase - 15  -->
<!-- Clase - 16  -->
