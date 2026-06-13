

export default function ContactCard({ contactData }){
    return(<>
            <div className="border border-blue-600/50 text-2xl rounded-2xl justify-center bg-blue-600/30 items-center p-2 m-2">
                {contactData.contactIcon}
            </div>

            <div className="text-left">
                <h1 className="text-gray-600 font-bold">{contactData.contactTitle}</h1>
                <p className="text-blue-800 font-bold">{contactData.contactLink}</p>
                <p className="text-sm text-gray-600">{contactData.contactDesc}</p>
            </div>
    </>)
}