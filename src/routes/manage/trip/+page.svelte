<script>
    let seats = [{ type: "", number: "" }];
    let employees = [{ id: "", name: "" }];
    let travelDate = ""; // ตัวแปรสำหรับจัดการวันที่

    // เพิ่มแถวใหม่สำหรับประเภทที่นั่ง
    function addSeatType() {
        seats.push({ type: "", number: "" });
    }

    // เพิ่มแถวใหม่สำหรับพนักงานตรวจ
    function addEmployee() {
        employees.push({ id: "", name: "" });
    }

    // จัดการการเปลี่ยนแปลงของวันที่ เพื่อแสดงรูปแบบวัน/เดือน/ปี
    function formatDate(event) {
        const date = new Date(event.target.value);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        travelDate = `${day}/${month}/${year}`;
    }

    // ฟังก์ชันสำหรับส่งฟอร์ม
    function submitForm() {
        console.log("Form Submitted");
        console.log("Travel Date:", travelDate); // ดูวันที่ในรูปแบบวัน/เดือน/ปี
        // ที่นี่สามารถส่งข้อมูลไปยัง backend หรือ API ได้
    }
</script>

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

<div class="flex p-24 justify-center min-h-screen bg-white">
    <div class="p-4 w-full max-w-6xl">
        <h1 class="text-3xl font-bold mb-8 text-center text-[#102C57] underline">จัดการเที่ยวโดยสาร</h1>

        <!-- ฟอร์มจัดการเที่ยวโดยสาร -->
        <form on:submit|preventDefault={submitForm}>
            <h2 class="text-lg font-bold mb-2">เพิ่มเที่ยวโดยสาร</h2>
            <div class="grid sm:grid-cols-4 gap-4 mb-6 ">
                <input type="text" class="border p-2 rounded" placeholder="รหัสเที่ยวโดยสาร">
                <input type="text" class="border p-2 rounded" placeholder="รหัสรถไฟ">
                <input type="text" class="border p-2 rounded" placeholder="จำนวนขบวน">
                <input type="text" class="border p-2 rounded" placeholder="ประเภทขบวนโดยสาร">
                <select class="border p-2 rounded">
                    <option>เส้นทางโดยสาร</option>
                </select>
                <select class="border p-2 rounded">
                    <option>สถานีต้นทาง</option>
                </select>
                <select class="border p-2 rounded">
                    <option>สถานีปลายทาง</option>
                </select>
                <input type="date" class="border p-2 rounded" placeholder="วันที่เดินทาง" on:change={formatDate}>
                <input type="time" class="border p-2 rounded" placeholder="เวลาออกเดินทาง">
            </div>
            <div class="flex justify-end mb-4">
                <button class="underline bg-white-300 hover:bg-gray-200 text-[#102C57] font-bold py-2 px-4 rounded inline-flex flex-col items-center" on:click={addSeat}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                  
                    <span>เพิ่มเที่ยวโดยสาร</span>
                </button>
            </div>

            <!-- ประเภทที่นั่ง -->
            <h2 class="text-lg font-bold mb-2">ประเภทที่นั่ง</h2>
            {#each seats as seat, i}
            <div class="grid sm:grid-cols-4 gap-4 mb-4">
                <input type="text" class="border p-2 rounded" placeholder="รหัสขบวน">
                <select class="border p-2 rounded">
                    <option>ชั้นโดยสาร</option>
                </select>
                <input type="text" class="border p-2 rounded" placeholder="ประเภทที่นั่ง" bind:value={seat.type}>
                <input type="number" class="border p-2 rounded" placeholder="จำนวนที่นั่ง" bind:value={seat.number}>
            </div>
            {/each}
            <div class="flex justify-end mb-4">
                <button class="underline bg-white-300 hover:bg-gray-200 text-[#102C57] font-bold py-2 px-4 rounded inline-flex flex-col items-center" on:click={addSeatType}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                  
                    <span>เพิ่มประเภทที่นั่ง</span>
                </button>
            </div>

            <hr class="mb-6">

            <!-- พนักงานตรวจ -->
            <h2 class="text-lg font-bold mb-2">พนักงานตรวจ</h2>
            {#each employees as employee, i}
            <div class="grid sm:grid-cols-3 gap-4 mb-4">
                <input type="text" class="border p-2 rounded" placeholder="รหัสพนักงาน" bind:value={employee.id}>
                <input type="text" class="border p-2 rounded" placeholder="ชื่อ-สกุลพนักงาน" bind:value={employee.name}>
            </div>
            {/each}
            <div class="underline flex justify-end mb-4">
                <button class="bg-white-300 hover:bg-gray-200 text-[#102C57] font-bold py-2 px-4 rounded inline-flex flex-col items-center" on:click={addEmployee}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mb-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>                  
                    <span>เพิ่มพนักงาน</span>
                </button>
            </div>

            <div class="mt-4 flex items-center justify-center bg-white">
                <a href='/manage' class="bg-[#102C57] text-white px-4 py-2 rounded-md" >
                  ยืนยัน
                </a>
                <a href='/manage' class="bg-[#102C57] text-white px-4 py-2 rounded-md ml-4 whitespace-nowrap" >
                  ย้อนกลับ
                </a>
            </div>
            
        </form>
    </div>
</div>
