# KeepAlive + vue-router bug demonstration

This repo demonstrates an error that occurs when you have nested RouterViews and KeepAlive  

Essentially it looks like this, look at my code for more details.
```
<RouterView>
  <KeepAlive>
    <RouterView>
      <KeepAlive>
        <component>
      </KeepAlive>
    </RouterView>
  </KeepAlive>
</RouterView>
```
