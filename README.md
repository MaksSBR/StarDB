
1. React ничего не знает о работе с сервером -
   это задача других библиотек
-AXIOS
-Superagent
-GOT
-Reqwest
-Request



2. Сетевой код следует изолировать от кода
   компонентов

3. Если необходимо, трансформируйте данные до
   того, как их получит компонент

4. Обрабатывайте состояния "загрузка" и "ошибка"

5. Разделяйте ответственность компоненов:
   логику и рендеринг


lifecycle hooks (Жизненый цикл компонентов) :

MOUNTING
_______
constructor() => render() => componentDidMount()


UPDATES
_______
New props
             => render() => componentDibUpdate(prevprops,prevstate)
setState

UNMOUNTING
__________
componentWillUnmount()


ERROR
_____
componentDidCatch(error, info)
// вызывается ошибкой и на ближайшем.родителе компонента вызывается componentDidCatch()
// component содержащие componentDidCatch() называют
error boundary
// componentDidCatch() работает только с ошибками в методах жизн цикла (lifecycle hooks)
// componentDidCatch это не замена стандартным проверкам
