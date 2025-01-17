ServerEvents.tags('item', event => {
    // Remove invalid or missing item from the tag
    event.remove('chisel_chipped_integration:laboratory_block', 'chisel_chipped_integration:laboratory_colsole')
})

ServerEvents.tags('block', event => {
    // Remove invalid or missing blocks from the tag
    event.remove('chisel_chipped_integration:laboratory_block', 'chisel_chipped_integration:laboratory_colsole')
})