export default function SectionTitle({ text1, text2, text3, text4 , text5, text6,text7,text8}) {
    return (
        <>
            <p className="text-center font-medium text-indigo-600 dark:text-indigo-400 mt-28 px-10 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 w-max mx-auto">{text1}</p>
            <h3 className="text-2xl font-semibold text-center mx-auto mt-4">{text2}</h3>
            <p className="text-slate-600 dark:text-slate-300 text-center mt-2 max-w-lg mx-auto">{text3}</p>
            <h2 className="text-2xl font-semibold text-center mx-auto mt-4">{text4}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mt-2 max-w-lg mx-auto">{text5}</p>
            <h2 className="text-2xl font-semibold text-center mx-auto mt-4">{text6}</h2>
            <p className="text-slate-600 dark:text-slate-300 text-center mt-2 max-w-lg mx-auto">{text7}</p>
            <h2 className="text-2xl font-semibold text-center mx-auto mt-4">{text8}</h2>
        </>
    );
}