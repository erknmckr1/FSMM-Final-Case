## Get Started

```bash
npm run start
# or
yarn start
```
## Which libraries were used
- ReactJS
- Tailwin CSS
- axios
- react-router-dom
- Material ui
- react-outline-slick
 
### tailwind CSS setup
1- npm install tailwindcss postcss-cli autoprefixer
2- npx tailwindcss init 

### React Router Dom v6
- Routes komponenti : Tüm yönlendirme işlemlerini içeren ana komponenttir. 
- Route komponenti : Yönlendirmelerin tanımlandığı komponenttir. 
- element özelliği : Yönlendirmenin olacağı komponenti bildirir.
- Outlet komponenti :
  
### Redux Toolkit short notes...

- createAsyncThunk fonksiyonu Redux Toolkit'in sağladığı bir fonksiyondur ve asenkron işlemleri daha kolay hale getirmek için kullanılır.


## Notes myself

- public'e src ozellıgınde belırtmeden erısebılırız.

- Routing işlemlerinde outlet komponenti ile uzantının eşleşen alt komponentini goruntulememızı sağlar.
  
```bash
function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index={true} element={<Home/>}/>
          <Route path='/shıps' element={<Shıps/>}/>
          <Route path='/characters' element={<Characters/>}/>
        </Route>
      </Routes>
    </div>
  );
};
#--
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

```
Örneğin, yukarıdaki kod örneğinde, Layout bileşeninin altında Home, Shıps ve Characters bileşenleri bulunur. Bu rotaların hepsi, Outlet bileşeninin yer aldığı Layout bileşeninde görüntülenecektir.
Outlet bileşeni, Layout bileşeninin main bölümünde yer alır ve burada rotalara göre eşleşen bileşenler görüntülenir. Örneğin, / rotası ana sayfa için eşleşir ve Home bileşeni Outlet bileşeni içinde görüntülenir. /shıps rotası, Shıps bileşeniyle eşleşir ve Shıps bileşeni de Outlet bileşeni içinde görüntülenir.

- 
  ```bash
  h-[calc(100%-88px)]
  ```

- Bazı mui komponentlerınde tailwind CSS ve benzeri css kütüphaneleri ile biçimlendirme olmuyor. 