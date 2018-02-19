var statistic = {
    arrNumber: [],

    getMin: function(){
        var min = this.arrNumber.reduce(function(a, b){
            return Math.min(a, b);
        });
        return min;
    },

    getMax: function(){
        var max = this.arrNumber.reduce(function(a, b){
            return Math.max(a, b);
        });
        return max;
    },

    getLength: function(){
        return this.arrNumber.length;
    },

    getAverage: function(){
        if(this.arrNumber.length > 0){
            var sum = this.arrNumber.reduce(function(a, b){
                return a + b;
            }, 0);
            return sum / this.arrNumber.length;
        }
    }
}

document.getElementById('btAdd').onclick = function(){
    var val = document.getElementById('txtVal').value;
    var text;
    if(!isNaN(val) && val){
        statistic.arrNumber.push(parseInt(val));
        document.getElementById('txtVal').value = '';
        console.log(statistic.arrNumber)
    }

    text = statistic.arrNumber.join('<br>');

    document.getElementById('divDisplay').innerHTML = text;
}

document.getElementById('btCalc').onclick = function(){
    alert('mínimo: ' + statistic.getMin() + '\nmáximo: ' + statistic.getMax() + '\nelementos: ' + statistic.getLength() + '\nmédia: ' + statistic.getAverage());
}