function toggleChannels(competitionId) {
    const channelsDiv = document.getElementById(competitionId);
    const isHidden = channelsDiv.style.maxHeight === "10px"; // Verifica si está oculto
    if (channelsDiv.style.display === "none" || channelsDiv.style.display === "") {
        channelsDiv.style.display = "block";
    } else {
        channelsDiv.style.display = "none";
    }
}