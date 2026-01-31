import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

export default function DateTimePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState('09:41');
    const [period, setPeriod] = useState('AM');

    return (
        <div className="mb-5">
            <h3 className="text-xl font-medium mb-3 text-[#333333]">
                Select Date & Time
            </h3>
            <div className="w-[350px] bg-[#F4F4F5] rounded-xl shadow-md p-4">
                {/* Calendar */}
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rdp-custom"
                    modifiersClassNames={{
                        selected: 'bg-pink-500 text-white',
                        today: 'text-pink-500 font-semibold',
                    }}
                />

                {/* Time */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg text-[#333333]">Time</p>

                    <div className="flex items-center gap-2">
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="bg-[#7676803D] rounded-md px-2 py-2 text-sm outline-none"
                        />

                        <div className="flex bg-[#7676803D] rounded-md overflow-hidden">
                            {['AM', 'PM'].map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPeriod(p)}
                                    className={`p-1 text-xs font-medium transition
                                    ${period === p
                                            ? 'bg-gray-800 text-white'
                                            : 'bg-[#7676803D]! text-white'}`
                                    }
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Output */}
                <div className="mt-4 text-xs text-gray-600">
                    <p>
                        Selected:{' '}
                        <span className="font-medium">
                            {selectedDate
                                ? `${format(selectedDate, 'MMM dd, yyyy')} • ${time} ${period}`
                                : 'None'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
