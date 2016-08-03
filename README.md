# Labile-Canvas-Effect
Arkaplanınıza hoş bir görüntü sunar.

[Demo](http://codepen.io/coder2317/full/kXRVdg/)

***Nasıl Kullanılır ?*** 

* Effect.js dosyasını HTML dosyanıza dahil ediniz.

```html
<script type="text/javascript" src="Effect.js"></script>
```

* Ardından, kendi isteğinize göre ayarlarını yapınız.

```html
<script type="text/javascript">

	window.onload = function()
	{
	
	// var Efekt = new Effect(CanvasId , Top Sayısı , Topların Düşme Hızı , Arkaplan renginin değişme süresi);
	
	var Efekt = new Effect("MyCanvas",500,10,3);
	
	setInterval(function(){Efekt.changeBackgroundColor()},Efekt.Time*1000);
	
	setInterval(function(){Efekt.getBalls()},100/Efekt.Speed);


	
	}
	
</script>

```

* Son olarak , bir Canvas oluşturun.

```html
<canvas id="MyCanvas"></canvas>
```

Hepsi bu kadar.
