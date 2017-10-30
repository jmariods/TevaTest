@extends('layouts.app')
@section('content')
<div></div>
<div>BI Demand Planning</div>
<div></div>
<div>
    <fieldset>
        <div>
            <div>
                <div id="divRegistros"></div>
            </div>
        </div>
        <div id="canvas-holder" style="width:90%">
            <canvas id="chart-area0" />
        </div>
        <button id="btnDaily" type="button">
            Diario
        </button>
        <button id="btnMonthly" type="button">
            Mensual
        </button>
        <button id="btnYearly" type="button">
            Anual
        </button>
    </fieldset>

    <div id="canvas-holder" style="width:25%">
        <canvas id="chart-area1" />
    </div>
    <div id="canvas-holder" style="width:25%">
        <canvas id="chart-area2" />
    </div>
    <div id="canvas-holder" style="width:25%">
        <canvas id="chart-area3" />
    </div>
    <div id="canvas-holder" style="width:25%">
        <canvas id="chart-area4" />
    </div>
</div>
<script src="{{ asset('js/reportes/reporteTeva.js') }}"></script>
@endsection
