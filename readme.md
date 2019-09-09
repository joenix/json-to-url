# Json To Url

## Parse Json To Url Query

### Import Package 'json-to-url'
```
import parse as 'json-to-url';
```

### Parsing Object
```
var json = {
	name: 'joenix',
	"age": 30,
	'sex': "boy",
	email: 'joenix@qq.com'
};

console.log( parse(json) );
```

### Possible Result
```
name=joenix&age=30&sex=boy&email=joenix@qq.com
```
