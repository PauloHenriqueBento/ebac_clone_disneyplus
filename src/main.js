document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (const button of buttons){
        button.addEventListener('click', function (button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
                
            hiddingAllTab()
            removeButtonActive()

            tab.classList.add('shows__list--is-active')
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (const button of buttons) {
        button.classList.remove('shows__tabs__button--is-active')
    }
}

function hiddingAllTab() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (const tab of tabsContainer) {
        tab.classList.remove('shows__list--is-active')
    }
}