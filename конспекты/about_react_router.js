<BrowserRouter>
Пробрасывает в контекст значения history, match и location. 
Их получают все компоненты, которые окажутся обернуты в <Route />"

<Link text="Перехватывают нажатие и не дают обновиться окну браузера. Вместо этого сами кладут назначенный url в адресную строку" />

<Route path="Путь, по которому будет матч" component="" render='' /> 

History: управляет историей браузера, можно записать новую запись, перезаписать последнюю и можно просмотретьт предыдущие.
Location: разбивает url на параметры, поисковыен параметры, хэш и тд
Match: isExact ? , url - то, что в адресной строке; path - то, что в атрибутах в компоненте Route.
match.rl - используется для ссылок, тк там все уже реальные значения.
match.path - для роутинга, в Route path
<Switch>
    Ищет первый Route, у которого совпал path, и рендерит его.
    <Route path="/home" component="Home"/>
    <Route path="/about" component="About us"/>
    <Redirect from="/company" to="/about" />  - перенаправляет с конкретной страницы на другую 
    
    <Redirect to="/home" />  - Перенаправляет с любой страницы, не подошедшей под все предыдущие

    <Route path="*" component="Page Not Found 404"/> - А этот выдает страницу ошибки (или любую другую), 
    если все предыдущие матчи не случились. Стоит выбрать между этим вариантом и редиректом
</Switch>
    <Route path="/home" component="Additional advertising on Home page"/>
Этот будет отрендерен на странице home _вместе_ с другим компонентом

</BrowserRouter>

