# lazy-loader
Javascript simple Lazy Loader

## Parameters & Values
1. src : Script Source - Relative Path or URL (mandatory)
2. method: Script Loading Method, Values : "async" | "defer" (optional | default none)
3. integrity: Source integrity (optional)
4. crossorigin : Souce CrossOrigin (optional)

##Example

### Remote Script
Load a remote script
```
    document.lazy_load('https://code.jquery.com/jquery-3.3.1.min.js', 'defer', "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=", "anonymous");

```
Load a local script
```
    document.lazy_load(data.js);

```

