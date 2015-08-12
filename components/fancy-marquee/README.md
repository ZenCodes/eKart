fancy-marquee
============

This polymer element is used to insert a scrolling area of text, with custom speed and direction.

## Usage

```html
<link rel="import" href="fancy-marquee.html">
```

Use this element:

```html
<fancy-marquee duration='15' direction='normal'>

  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, rem distinctio officiis molestiae placeat eum sapiente accusantium aut. Accusamus, ipsa numquam unde eius atque ea autem non quo assumenda fuga.</div>

</fancy-marquee>
```

## Attributes

### `direction`
Possible values are: 'normal', 'reverse', 'alternate', 'reverse-alternate'
Possible modifiers are: '*-vertical', '*-horizontal'

```
@property direction
@type string
@default 'normal'
```

### `scrolling`
Possible values are: 'paused', 'running'

```
@property scrolling
@type string
@default 'running'
```

### `duration`
Values are in seconds.

```
@property duration
@type number
@default 1
```

## Methods

### `toggleScrolling`
This method toggles the scrolling values.

```
@param {string} 'running' or 'paused'
```

### `toggleDirection`
This method toggles the direction values.

```
@param {string} One of these 'normal|reverse|alternate|alternate-reverse'. You can specify a modifier such '-vertical' or '-horizontal'
```

## Testing Your Element

```sh
python -m SimpleHTTPServer
```

Or other method using NodeJS:

```sh
http-server ./
```

This starts a web server on port 8000, so you can test your new element by navigating a browser to `localhost:8000/test/index.html`.


## License

Copyright (c) 2014 Wassim Chegham. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
