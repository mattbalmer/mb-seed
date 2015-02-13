var library = {
    foo: 'bar'
};

module.exports = library;
if(typeof window !== 'undefined') window.library = library;