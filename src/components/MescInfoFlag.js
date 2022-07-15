function MescInfoFlag({ icon, text }) {
    return (
        <div className="info-flag box-border flex items-center mt-2 lg:mt-4">
            <div className="info-icon bg-[#fff2db] p-2 rounded-full lg:p-4">
                <img src={icon} alt="Body part" className="w-6 lg:w-8"></img>
            </div>

            <span className="capitalize font-josefin-sans ml-3 lg:ml-6">{text}</span>
        </div>
    )
}

export default MescInfoFlag;