
# lazy-loader
Javascript simple Lazy Loader

## Parameters & Values
1. src : Script Source - Relative Path or URL (mandatory)
2. method: Script Loading Method, Values : "async" | "defer" (optional | default none)
3. integrity: Source integrity (optional)
4. crossorigin : Souce CrossOrigin (optional)

## Example

### Remote Script
Load a remote script
```javascript
    document.lazyLoad('https://code.jquery.com/jquery-3.3.1.min.js', 'defer', "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=", "anonymous");

```
### Local Script
Load a local script
```javascript
    document.lazLoad(data.js);

```
### Promise Interface
```javascript

document.lazyLoad(src,[optional params])
.then(data=>{
    console.log(data);
    //Do other Tasks
})
```

