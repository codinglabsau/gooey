# Changelog
## v1.1.0
* add image slot support

## v1.0.0
### use-toast.ts
* Added props `icon`, `iconClasses`, `objectFormat`, to `ToasterToast` type. This allows support for Inertia style toasts through the Notifications component.
* allow objects on errors
* Increased toast limit 3 (was 1)

### Toaster.vue
* Added support messages and icons to template
* allow objectFormat prop to determine output format for objects
