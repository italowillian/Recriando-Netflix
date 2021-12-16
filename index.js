class Accordion {
    constructor(AccordionListQuestions) {
        this.AccordionListQuestions = document.querySelectorAll
        (AccordionListQuestions);
        this.activeItemClass = "active";
    }

    toggleAccordion(Item) {
        Item.classList.toggle(this.activeItemClass);
        Item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.AccordionListQuestions.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordion
            (question));
        });
    }

    init() {
        if (this.AccordionListQuestions.length) {
            this.addAccordionEvent();
        }
        return this;
    }
}

const accordion = new Accordion(".faq-question");
accordion.init();
