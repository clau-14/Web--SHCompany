#!/bin/bash

# Lista de archivos a actualizar
files=(
    "views/pqrs.html"
    "views/soporte-tecnico.html"
    "views/familiash.html"
    "views/control-parental.html"
    "views/indicadores-calidad.html"
    "views/limitacion-velocidad.html"
    "views/cancelacion-servicios.html"
    "views/proteccion-infantil.html"
)

# Función para actualizar navegación en cada archivo
update_navigation() {
    local file=$1
    local page_name=$2
    
    # Obtener el nombre de la página sin extensión
    basename=$(basename "$file" .html)
    
    # Reemplazar la navegación
    sed -i 's|href="../index.html"|href="/"|g' "$file"
    sed -i 's|href="empresa.html"|href="/empresa"|g' "$file"
    sed -i 's|href="planes.html"|href="/planes"|g' "$file"
    sed -i 's|href="pqrs.html"|href="/pqrs"|g' "$file"
    sed -i 's|href="soporte-tecnico.html"|href="/soporte-tecnico"|g' "$file"
    sed -i 's|href="familiash.html"|href="/familiash"|g' "$file"
    sed -i 's|href="control-parental.html"|href="/control-parental"|g' "$file"
    sed -i 's|href="indicadores-calidad.html"|href="/indicadores-calidad"|g' "$file"
    sed -i 's|href="limitacion-velocidad.html"|href="/limitacion-velocidad"|g' "$file"
    sed -i 's|href="cancelacion-servicios.html"|href="/cancelacion-servicios"|g' "$file"
    sed -i 's|href="proteccion-infantil.html"|href="/proteccion-infantil"|g' "$file"
    
    echo "Actualizado: $file"
}

# Actualizar cada archivo
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        update_navigation "$file"
    else
        echo "Archivo no encontrado: $file"
    fi
done

echo "¡Actualización completada!"
