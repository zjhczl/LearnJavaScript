'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//Workout
class Workout {
    date = new Date();
    id = (Date.now() + "").slice(-10);
    constructor(coords, distance, duration) {
        this.coords = coords;
        this.distance = distance; //km
        this.duration = duration; //min
    }
}
//Running
class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace() {
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
//Cycling
class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.cadence = elevationGain;
        this.calcSpeed();
    }
    calcSpeed() {
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}
/////////////////////////////////////
//创建App class
class App {
    _map;
    constructor() {
        this._getPosition();
    }
    _getPosition() {
        //获取当前坐标
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            // alert(position);
            const { latitude, longitude } = position.coords
            console.log(latitude);
            console.log(`https://www.google.com/maps/@${latitude},${longitude},7z?hl=zh-cn`);
            const coords = [latitude, longitude];
            this._loadMap(coords);
        }, function() {
            alert("不能获取到坐标。");
        });
    }
    _loadMap(coords) {
        console.log('开始加载地图...');
        //use leaflet
        //L.map()传入html元素id name

        // const map = L.map('map').setView([51.505, -0.09], 13);
        this._map = L.map('map').setView(coords, 13);
        //小瓦片
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this._map);
        //地图标记
        L.marker(coords).addTo(this._map)
            .bindPopup('您的位置')
            .openPopup();

        //监听用户单击的坐标
        //leaflet库的方法
        this._map.on("click", (mapEvent) => {
            this.mapEvent = mapEvent;
            this._showForm();
            const { lat, lng } = mapEvent.latlng;

            L.marker([lat, lng]).addTo(this._map)
                .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: 'running-popup'
                }))
                .setPopupContent('marker')
                .openPopup();
        });
    }
    _showForm() {
        //显示左侧表单
        form.classList.remove('hidden');
        inputDistance.focus();
    }
    _toggleElevationField() {}
    _newWorkout() {}
}

const app = new App();