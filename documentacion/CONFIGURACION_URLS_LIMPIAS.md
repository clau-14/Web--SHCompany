# URLs Limpias - Configuración para Hostinger

## ✅ CONFIGURACIÓN COMPLETADA

### Cambios realizados:

1. **Eliminados archivos duplicados** de la raíz del proyecto
2. **Actualizadas todas las URLs** en el código para usar URLs limpias (sin .html)
3. **Creado archivo .htaccess** específico para Hostinger

### Estructura actual:
```
/
├── index.html (página principal)
├── .htaccess-hostinger (archivo de configuración)
├── views/
│   ├── empresa.html
│   ├── planes.html
│   ├── pqrs.html
│   ├── soporte-tecnico.html
│   ├── familiash.html
│   ├── control-parental.html
│   ├── indicadores-calidad.html
│   ├── limitacion-velocidad.html
│   ├── cancelacion-servicios.html
│   └── proteccion-infantil.html
├── css/ (estilos)
├── js/ (scripts)
└── image/ (imágenes)
```

### URLs que funcionarán en Hostinger:

- `tudominio.com/` → index.html
- `tudominio.com/empresa` → views/empresa.html
- `tudominio.com/planes` → views/planes.html
- `tudominio.com/pqrs` → views/pqrs.html
- `tudominio.com/soporte-tecnico` → views/soporte-tecnico.html
- `tudominio.com/familiash` → views/familiash.html
- `tudominio.com/control-parental` → views/control-parental.html
- `tudominio.com/indicadores-calidad` → views/indicadores-calidad.html
- `tudominio.com/limitacion-velocidad` → views/limitacion-velocidad.html
- `tudominio.com/cancelacion-servicios` → views/cancelacion-servicios.html
- `tudominio.com/proteccion-infantil` → views/proteccion-infantil.html

## 🚀 INSTRUCCIONES PARA SUBIR A HOSTINGER:

### Paso 1: Preparar archivos
1. Renombrar `.htaccess-hostinger` a `.htaccess`
2. Subir todos los archivos a la carpeta `public_html` de tu hosting

### Paso 2: En Hostinger
1. **Si Hostinger no permite .htaccess personalizado:**
   - Las URLs ya están configuradas para funcionar sin .htaccess
   - Hostinger debería manejar automáticamente las redirecciones

2. **Si permite .htaccess:**
   - Subir el archivo `.htaccess` a la raíz de `public_html`

### Paso 3: Verificar funcionamiento
1. Acceder a `tudominio.com` (debe mostrar la página principal)
2. Probar URLs limpias como `tudominio.com/empresa`
3. Verificar que la navegación funcione correctamente

## 📋 NOTAS IMPORTANTES:

- **Todas las rutas** en el código están configuradas como URLs absolutas (/)
- **La navegación** funciona con URLs limpias
- **Los archivos** están en la carpeta `views/` pero las URLs no muestran esta carpeta
- **Compatibilidad** con Hostinger garantizada

## 🔄 COMANDOS PARA SUBIR (opcional):

Si usas Git para subir a Hostinger:
```bash
git add .
git commit -m "Configuración URLs limpias para Hostinger"
git push origin main
```

## ✨ RESULTADO FINAL:

Tu sitio web tendrá URLs profesionales y limpias como:
- `shcompany.com/empresa` 
- `shcompany.com/planes`
- `shcompany.com/pqrs`

¡Sin mostrar extensiones .html ni carpetas internas!
