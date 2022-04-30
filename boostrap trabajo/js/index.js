$(function () {
    $('#miModal').on('show.bs.modal', function (e) {
        console.log('el modal se muestra :)')

        $('#miBtnReserva').removeClass('btn-primary')
        $('#miBtnReserva').addClass('btn-outline-light')
        $('#miBtnReserva').prop('disabled', true)
    })
    $('#miModal').on('show.bs.modal', function (e) {

        console.log('el modal se oculta :)')

        $('miBtnReserva').prop('disabled', false)
        $('#miBtnReserva').removeClass('btn-outline-light')
        $('#miBtnReserva').addClass('btn-primary')

    })
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toogle="popover"]').popover()
    $('.mipopover').popover({
        container: 'body'
    })
    $('.carousel').carousel({
        interval: 2000
    })
})