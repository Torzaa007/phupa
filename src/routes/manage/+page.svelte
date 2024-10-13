<script>
    export let data
    let trips = data.trips;  // รายการเที่ยวโดยสารปัจจุบัน
    let stations = data.stations;  // รายการสถานีรถไฟ
    
</script>

<!-- Navbar -->
<nav class="bg-[#EADBC8] shadow-xl border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-24">
            <div class="flex">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="/" class="text-2xl font-bold text-[#102C57]">OURTRAINS</a>
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- Main content -->
<div class="flex p-8 lg:p-12 justify-center min-h-screen bg-white">
    <div class="container mx-auto p-4">
        <!-- ตารางเที่ยวโดยสารปัจจุบัน -->
        <h1 class="text-3xl font-bold mb-8 text-center text-[#102C57] underline">จัดการเที่ยวโดยสาร</h1>
        <h2 class="text-xl font-bold mb-4">เที่ยวโดยสารปัจจุบัน</h2>
        <section class="overflow-auto h-96"> 
            <table class="table-auto w-full text-left border-collapse  whitespace-nowrap ">
                <thead class="sticky top-0">
                    <tr class="bg-gray-200">
                        <th class="px-2 py-2 sm:px-4 sm:py-2">รหัสเที่ยวโดยสาร</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">ต้นทาง</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">ปลายทาง</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">วัน / เวลาที่ออก</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">เวลาที่ถึง</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">ชั้นโดยสาร</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">จำนวนที่นั่ง</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">พนักงานตรวจ</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">จัดการเที่ยวโดยสาร</th>
                    </tr>
                </thead>
                <tbody>
                    {#each trips as trip}
                    <tr class="even:bg-gray-100 ">
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.trip_id}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.start}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.end}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.from_datetime}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.arrivalTime}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.class}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.seats}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{trip.staff_id}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2 flex flex-col sm:flex-row">
                            <button class="bg-red-500 text-white px-2 py-2 sm:px-4 sm:py-2 rounded mb-2 sm:mb-0 sm:mr-2">ลบเที่ยวโดยสาร</button>
                            <button class="bg-blue-500 text-white px-2 py-2 sm:px-4 sm:py-2 rounded">แก้ไข</button>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </section>
        <div class="mt-4 flex items-center justify-center bg-white">
            <a href='/manage/trip' class="bg-[#102C57] text-white px-4 py-2 rounded-md">เพิ่มเที่ยวโดยสาร</a>
        </div>

        <!-- ตารางสถานีรถไฟ -->
        <h2 class="text-xl font-bold mb-4 mt-8">สถานีรถไฟ</h2>
        <section class="overflow-auto h-96">
            <table class="table-auto w-full text-left border-collapse whitespace-nowrap">
                <thead class ='sticky top-0'>
                    <tr class="bg-gray-200">
                        <th class="px-2 py-2 sm:px-4 sm:py-2">รหัสสถานี</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">ชื่อสถานี</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">ระยะเวลา</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">สถานะการใช้งาน</th>
                        <th class="px-2 py-2 sm:px-4 sm:py-2">จัดการสถานี</th>
                    </tr>
                </thead>
                <tbody>
                    {#each stations as station}
                    <tr class="even:bg-gray-100">
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{station.station_id}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{station.station_name}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{station.time_use}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2">{station.station_status}</td>
                        <td class="border px-2 py-2 sm:px-4 sm:py-2 flex flex-col sm:flex-row">
                            <button class="bg-red-500 text-white px-2 py-2 sm:px-4 sm:py-2 rounded mb-2 sm:mb-0 sm:mr-2">ลบสถานี</button>
                            <button class="bg-blue-500 text-white px-2 py-2 sm:px-4 sm:py-2 rounded">แก้ไข</button>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </section>
        <div class="mt-4 flex items-center justify-center bg-white">
            <a href='/manage/station' class="bg-[#102C57] text-white px-4 py-2 rounded-md">เพิ่มสถานี</a>
        </div>
    </div>
</div>
