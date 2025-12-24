import { useEffect, useState } from 'react'
import { client, urlFor } from './client'

// هنا بنعرف شكل البيانات اللي جاية
interface HomepageData {
  title: string
  heroImage: any
}

function App() {
  const [data, setData] = useState<HomepageData | null>(null)

  useEffect(() => {
    // هنا بنكلم Sanity ونقوله هات بيانات الـ homepage
    // [0] معناها هات أول نتيجة تلاقيها
    client.fetch('*[_type == "homepage"][0]')
      .then((res) => {
        console.log("Data fetched:", res) // عشان نشوف النتيجة في الكونسول
        setData(res)
      })
      .catch((err) => console.error("Error:", err))
  }, [])

  // لو لسه بيحمل
  if (!data) return <h1 style={{ textAlign: 'center', marginTop: '50px' }}>جاري التحميل...</h1>

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* هنا بنعرض العنوان */}
      <h1>{data.title}</h1>

      {/* هنا بنعرض الصورة لو موجودة */}
      {data.heroImage && (
        <img
          src={urlFor(data.heroImage).width(800).url()}
          alt={data.title}
          style={{
            maxWidth: '100%',
            borderRadius: '15px',
            marginTop: '20px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}
        />
      )}
    </div>
  )
}

export default App