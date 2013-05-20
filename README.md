# Pinnacle/Dijit

Repository for files containing layout and settings for widgets and files.

## Builder.js
The Builder class constructs Dijit layouts from provided blueprints.

A blueprint is a plain object. The following serves as an example:

```javascript
{
    id: "registerAccountCharacterDetailsPane",
    type: "BorderContainer",
    style: {
        height: "300px",
        width: "100%"
    },
    design: "sidebar",
    content: {
        type: "ContentPane",
        style: {
            border: "none"
        },
        region: "center",
        content: "registerAccountCharacterDetailForm"
    }
}
```

### Dijit/Layouts
Layouts for pages.

### Dijit/Widgets
Instantiation of specific widgets.